# website

[![Netlify Status](https://api.netlify.com/api/v1/badges/7d474ac8-ef46-4841-8efa-0ce3658fb962/deploy-status)](https://app.netlify.com/sites/aloehealth/deploys)

our homepage. [aloe-health.tech](https://aloe-health.tech)

## Configuration:

This repository is actually hosted in the private aloe repository, but a public clone of the website is available here.

### Setup

The website remote url needs to be configured as a git remote in the local repository.

```bash
git remote add website git@github.com:aloe-health/website.git
```

### Maintenance

To pull updates from the external repo into this repo in the future:
*Note: All changes must be committed beforehand.*
To push changes manually from local without waiting for CI:
```bash
git subtree push --prefix=business/website website main
```

```bash
git subtree pull --prefix=business/website website main --squash
```