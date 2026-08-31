# Analytics ACAFRO

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python report_nucleos.py --database ..\backend\prisma\dev.db --output .\relatorio-nucleos.pdf
```

O script agrega os nucleos ativos com Pandas e gera um PDF simples para validação do pipeline.
