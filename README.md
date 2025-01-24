# vuln-node-app
Vulnerabilities introduced via older version of **bestzip** npm package.

## Vulnerabilities Check using npm audit
```sh
/vuln-node-app$ npm audit
# npm audit report
bestzip  <=2.1.6
Severity: critical
Command Injection in bestzip - https://github.com/advisories/GHSA-4qqc-mp5f-ccv4
Command injection in bestzip - https://github.com/advisories/GHSA-6xv6-jpvw-cx6q
Depends on vulnerable versions of yargs
fix available via `npm audit fix --force`
Will install bestzip@2.2.1, which is a breaking change
node_modules/bestzip

yargs-parser  6.0.0 - 13.1.1
Severity: moderate
yargs-parser Vulnerable to Prototype Pollution - https://github.com/advisories/GHSA-p9pc-299p-vxgp
fix available via `npm audit fix --force`
Will install bestzip@2.2.1, which is a breaking change
node_modules/yargs-parser
  yargs  8.0.0-candidate.0 - 12.0.5
  Depends on vulnerable versions of yargs-parser
  node_modules/yargs

3 vulnerabilities (2 moderate, 1 critical)

To address all issues (including breaking changes), run:
  npm audit fix --force
```

## Vulnerabilities Check using Orca ShiftLeft CLI
```sh
/vuln-node-app$ orca-cli fs scan ./
  ____   ___   _____ ___      ____ ____ _____ __  __ ___   ____ ________  __
 / __ \ / _ \ / ___// _ |    / __// __// ___// / / // _ \ /  _//_  __/\ \/ /
/ /_/ // , _// /__ / __ |   _\ \ / _/ / /__ / /_/ // , _/_/ /   / /    \  /
\____//_/|_| \___//_/ |_|  /___//___/ \___/ \____//_/|_|/___/  /_/     /_/
✓ Performing file system scanning for security risks
✓ Performing results analysis and policy decision (via Orca Cloud)
========================================================================
VULNERABILITIES
npm (./package-lock.json)
[TOTAL: 3 | CRITICAL: 1 | HIGH: 1 | MEDIUM: 1 | LOW: 0 | UNKNOWN: 0]
╭──────────────┬─────────────────────┬───────────────────┬───────────────────────────────┬──────────┬───────┬───────┬────────╮
│ PACKAGE      │ VULNERABILITY ID    │ INSTALLED VERSION │ FIXED VERSION                 │ SEVERITY │ CVSS2 │ CVSS3 │ STATUS │
├──────────────┼─────────────────────┼───────────────────┼───────────────────────────────┼──────────┼───────┼───────┼────────┤
│ bestzip      │ GHSA-4qqc-mp5f-ccv4 │ 1.1.6             │ 2.1.7                         │ CRITICAL │       │       │ FAILED │
├──────────────┼─────────────────────┼───────────────────┼───────────────────────────────┼──────────┼───────┼───────┼────────┤
│ bestzip      │ CVE-2020-7730       │ 1.1.6             │ 2.1.7                         │ HIGH     │ 7.5   │       │ FAILED │
├──────────────┼─────────────────────┼───────────────────┼───────────────────────────────┼──────────┼───────┼───────┼────────┤
│ yargs-parser │ CVE-2020-7608       │ 11.1.1            │ 13.1.2, 15.0.1, 18.1.1, 5.0.1 │ MEDIUM   │ 4.6   │ 5.3   │ FAILED │
╰──────────────┴─────────────────────┴───────────────────┴───────────────────────────────┴──────────┴───────┴───────┴────────╯
```
