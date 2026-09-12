# www.dfwskyview.com

Static site (hand-edited HTML/CSS/JS), deployed to production via S3 +
CloudFront, provisioned by CloudFormation.

## Deploy pipeline

1. `./B_MaketestWWW` — pushes `master` to `origin` (GitHub Pages).
   Review the change at http://git.dfwskyview.com before going further.
2. `./C_Syncme` — syncs this directory to the production S3 bucket
   (`www.dfwskyview.com`). CloudFront keeps serving old cached content
   until step 3.
3. `./D_InvalidateWWW` — invalidates the CloudFront cache so viewers
   see what was just synced.

Git remotes:
- `linuxtrader` — `git@github.com:linuxtrader/www.dfwskyview.com.git`,
  the source-of-truth backup. `master`'s upstream, so a bare `git push`
  goes here.
- `origin` — `https://github.com/dfwskyview/dfwskyview.github.io.git`,
  GitHub Pages preview target (see `CNAME`, points at
  `git.dfwskyview.com`).

## Other tools (from `../ctools/`, shared across all client sites)

- `1_StoreCFid` → `cfresultssky` — looks up this stack's CloudFront
  distribution ID via `aws cloudformation`, writes it to `.CFid`.
- `2_Git.setupWWW` — one-time repo bootstrap, already run.
- `deployclientsite`, `clientwebsite.yml` (in `ctools/`) — provisions a
  brand-new client subdomain stack (S3 + CloudFront + Route53 + ACM),
  the same template this site's `www` CloudFormation stack was created
  from.

## Archive

`archive/` holds retired tooling, kept for reference rather than deleted:

- `archive/mobirise/` — this site used to be edited with the Mobirise
  desktop app (`project.mobirise`) and patched afterward with
  `A_Htmlmod2WWW` to fix Mobirise's HTML output and inject custom
  CSS/JS. No longer used — edits are made directly to the HTML now.
- `archive/netlify/` — this site used to preview changes via Netlify
  (`.netlify` held the site slug `skyview`, served at
  `skyview.dfwskyview.com`) before syncing to production. Replaced by
  the GitHub Pages preview step above (`B_MaketestWWW`).

`../ctools/README.mobirise` is also marked deprecated for this site, but
left in place since other client sites under `../ctools/` may still use
Mobirise.
