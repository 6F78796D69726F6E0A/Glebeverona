# Verona House website

A complete static website with Home, Rooms, The House and the illustrated Glebe guide. No installation, build command or API keys are required.

## Upload the files to GitHub

1. Download and unzip `verona-house-github-ready.zip` on your computer.
2. Sign in to GitHub and [create a repository](https://github.com/new) named `verona-house`. Choose **Public** to use GitHub Pages with GitHub Free. Enable the option to add a README so the repository starts with a `main` branch, then create the repository.
3. Choose **Add file → Upload files**. Drag the contents of the unzipped folder into the upload area, keeping the `assets` and `docs` folders intact. Upload the actual files and folders, not the ZIP or an extra enclosing folder. The supplied README replaces the starter README.
4. Choose **Commit changes** and save to `main`. Confirm that `index.html`, `rooms.html`, `house.html`, `glebe.html`, `styles.css`, `script.js` and the `assets` folder appear at the top level.

Official help: [Upload files to a GitHub repository](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## Launch with GitHub Pages

The website presents Verona House and links guests to Airbnb. It does not accept bookings, process payments or collect card details.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Select the **main** branch and **/(root)** folder, then choose **Save**.
4. Wait for deployment to finish. Refresh the Pages settings and open **Visit site**, or use the published website address shown there. Your repository address displays source files; the published website address displays the actual website.
5. Open **Rooms** in the website navigation to see all eight named rooms. The website opens on Home and also includes The House and the full Glebe guide.
6. Check the pages, photos, Airbnb links and Azure Retreat image switch on a phone and computer.

Official help: [Configure GitHub Pages publishing](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Future commits to `main` will publish updates automatically.

GitHub's [Pages usage limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) restrict online-business hosting and sites primarily facilitating commercial transactions. The policy does not specifically resolve this site's informational pages with external Airbnb links; these setup instructions are not confirmation of GitHub's acceptance. Cloudflare Pages is an alternative below if needed.

### Connect your domain on GitHub Pages

After checking the published website, use **Settings → Pages → Custom domain** and enter `www.veronahouse.com.au`. Follow [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) to update your domain's DNS. This package alone does not change your existing domain or hosting.

## Alternative: publish from GitHub with Cloudflare Pages

Cloudflare Pages can publish the same files from either a public or private GitHub repository.

1. Sign in to [Cloudflare](https://dash.cloudflare.com/) or create an account.
2. Open **Workers & Pages → Create application → Pages → Import an existing Git repository** (also labelled **Connect to Git**).
3. Connect GitHub, grant access to the `verona-house` repository, select it, and choose **Begin setup**.
4. Use the settings below. The output directory is `.` because this package contains the finished website at its top level.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory | Leave blank |

5. Choose **Save and Deploy**. Open the `pages.dev` website address shown after deployment succeeds. This opens the Home page; choose **Rooms** in the navigation to open the room page.
6. Check Home, Rooms, The House and the Glebe guide on your phone and computer, including the booking links and the Azure Retreat image switch.

Official help: [Deploy static HTML](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/) and [connect a Git repository](https://developers.cloudflare.com/pages/get-started/git-integration/). Future commits to `main` will automatically publish an updated website.

### Connect your domain on Cloudflare Pages

Once you have checked the published website, open the Cloudflare Pages project and select **Custom domains → Set up a domain**. Enter `www.veronahouse.com.au` and follow the displayed DNS instructions. With an external DNS provider, this normally means setting the `www` CNAME target to the exact `pages.dev` hostname Cloudflare assigned. Add the domain in Pages before changing its DNS record.

Using `veronahouse.com.au` without `www` requires the domain's DNS to be managed by Cloudflare. If moving nameservers, retain the existing email and other service records. Follow [Cloudflare's custom-domain instructions](https://developers.cloudflare.com/pages/configuration/custom-domains/).

The package itself does not change your existing domain or hosting. Keep using the assigned `pages.dev` address until the custom domain is active.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `rooms.html` | Eight rooms, photographs and booking links |
| `house.html` | The house and its architecture |
| `glebe.html` | Full neighbourhood guide with venue photographs and directions |
| `home.html` | Compatibility link to Home |

`styles.css` controls the shared layout and branding. `guide.css` contains the neighbourhood guide layout. `script.js` controls the mobile navigation, Azure photo switch and guide section highlighting.

## Branding and room details

The supplied Verona House crest is used unchanged in page headers, footers and browser icons. Its file is `assets/verona-house-logo.jpeg`.

| Room | Name |
| --- | --- |
| 1 | The Magnolia Room |
| 2 | The Coastal Salon |
| 3 | The Terracotta Room |
| 5 | The Clifftop Salon |
| 6 | The Jazz Room |
| 7 | The Old Fashioned Room |
| 8 | The Sorrento Suite |
| 9 | The Azure Retreat |

The Magnolia Room is described as having ceiling-to-floor double sash windows. The Azure Retreat starts with its bedroom photograph; the private bathtub is second. The existing Airbnb booking destinations are retained. Update those links if the booking channel changes.

## Photography

Room photography comes from the corresponding Verona House Airbnb listings. The guide retains its venue photo credits and licence links. Source records are in `docs/room-photo-sources.json` and `docs/guide-photo-sources.json`. Preserve the displayed credits when reusing or modifying guide photographs.

## Review before switching the main domain

The package includes local photographs and a shared stylesheet. Google Fonts supplies the typefaces, with local fallback fonts if unavailable. Check the published site on a phone and desktop, confirm the room booking destinations, and review current venue information before announcing it to guests.

Prepared 15 September 2026.
