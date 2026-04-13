#!/usr/bin/env bash
set -euo pipefail

# Downloads source reports into assets/ for offline reference.
# These are binary PDFs — not committed to Git (see .gitignore).
#
# Usage:
#   chmod +x setup.sh && ./setup.sh

ASSETS_DIR="assets"
mkdir -p "$ASSETS_DIR"

echo "Downloading source reports into $ASSETS_DIR/ ..."

# Microsoft Digital Defense Report 2025
curl -fSL -o "$ASSETS_DIR/Microsoft-Digital-Defense-Report-2025.pdf" \
  "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Microsoft-Digital-Defense-Report-2025.pdf"
echo "  ✓ MDDR 2025"

# CyberPeace Institute — Cyber Resilience for NGOs: Threat Landscape Report (Dec 2024)
curl -fSL -o "$ASSETS_DIR/CyberPeace-NGO-Threat-Landscape-2024.pdf" \
  "https://cyberpeaceinstitute.org/wp-content/uploads/2024/12/Cyber-Resilience-NGOs_Threat-Landscape-Report.pdf"
echo "  ✓ CyberPeace Institute — NGO Threat Landscape 2024"

echo ""
echo "Done. Downloaded files:"
ls -lh "$ASSETS_DIR"/*.pdf 2>/dev/null || echo "  (no files found)"
