# Node.js Security Scan Demo

This project demonstrates basic security scanning using:

* Snyk (dependency vulnerability scanning)
* OWASP ZAP (dynamic web scanning)

---

## 🚀 Setup

### 1. Install Snyk CLI

```bash
curl --compressed https://downloads.snyk.io/cli/latest/snyk-linux -o snyk
chmod +x ./snyk
sudo mv ./snyk /usr/local/bin/
```

### 2. Authenticate Snyk

```bash
snyk auth <your-api-key>
```

---

## 🔍 Run Security Scans

### Snyk Test (Dependencies)

```bash
snyk test
```

---

### OWASP ZAP Baseline Scan

Pull Docker image:

```bash
docker pull ghcr.io/zaproxy/zaproxy:stable
```

Run scan:

```bash
zap-baseline.py -t https://medium.com/ -r report.html -I
```

---

## 📁 Output

* `report.html` → ZAP scan report
* Terminal output → Snyk vulnerabilities

---

## ⚠️ Notes

* This setup is intentionally simple
* No authentication or advanced configuration included
* Replace target URL with your own app for real testing

---

## 📌 Requirements

* Node.js
* Docker
* Snyk account

---

## 📈 Future Improvements

* Add CI/CD integration
* Add authentication scanning
* Add API security testing
* Configure severity thresholds

---

