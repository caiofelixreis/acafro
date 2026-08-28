"""Gera um relatorio inicial de nucleos a partir do SQLite da aplicacao."""
from __future__ import annotations

import argparse
import sqlite3
from pathlib import Path

import pandas as pd
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Spacer, Table, TableStyle, Paragraph


def read_nucleos(database: Path) -> pd.DataFrame:
    with sqlite3.connect(database) as connection:
        return pd.read_sql_query(
            "SELECT nome, endereco, ativo, createdAt FROM Nucleo WHERE ativo = 1 ORDER BY nome",
            connection,
        )


def write_pdf(data: pd.DataFrame, output: Path) -> None:
    styles = getSampleStyleSheet()
    document = SimpleDocTemplate(str(output), pagesize=A4)
    rows = [["Nucleo", "Endereco", "Ativo", "Criado em"]] + data.astype({"ativo": str}).values.tolist()
    table = Table(rows, repeatRows=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#4b2e25")),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#ddcaba")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.HexColor("#fffaf3"), colors.HexColor("#f5eee4")]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    document.build([Paragraph("Relatorio de nucleos ACAFRO", styles["Title"]), Spacer(1, 12), table])


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--database", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=Path("relatorio-nucleos.pdf"))
    args = parser.parse_args()
    data = read_nucleos(args.database)
    summary = data.groupby("ativo", as_index=False).size().rename(columns={"size": "total"})
    print(f"Nucleos ativos: {int(summary['total'].sum()) if not summary.empty else 0}")
    write_pdf(data, args.output)
    print(f"PDF gerado em: {args.output}")


if __name__ == "__main__":
    main()
