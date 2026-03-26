# pasteur — CASL HPC Cluster Documentation

Static documentation website for the **pasteur** HPC cluster at the Complex Adaptive Systems Lab (CASL).

## Pages

| Page | File |
|------|------|
| Home / Overview | `index.html` |
| Getting Started | `getting-started.html` |
| Storage Layout | `storage.html` |
| Slurm & Scheduling | `slurm.html` |
| GPU Jobs | `gpu-jobs.html` |
| Software Stack | `software.html` |

## Hosting on GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **`main`** branch and **`/ (root)`** folder
5. Click **Save**

Your site will be live at `https://<your-org>.github.io/<repo-name>/` within a minute or two.

## Local Preview

No build step required — open any `.html` file directly in a browser, or run a local server:

```bash
# Python
python3 -m http.server 8080

# Then visit http://localhost:8080
```

## Maintenance

- All pages share `css/style.css` and `js/main.js`
- Navigation is duplicated in each HTML file's `<nav>` block — update all pages when adding a new section
- The `.nojekyll` file prevents GitHub Pages from running Jekyll on this repo

## Cluster Info

- **Node:** pasteur (bare-metal, Ubuntu 24.04 LTS)
- **Login VM:** pasteur-login (KVM, bridged to university network)
- **GPUs:** 8 × NVIDIA H200
- **CPUs:** 384 logical cores
- **RAM:** ~2.2 TB
- **Storage:** 14 TB `/data` (NFS shared)
- **Scheduler:** Slurm with slurmdbd + MariaDB
