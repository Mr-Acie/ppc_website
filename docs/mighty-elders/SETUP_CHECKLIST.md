# Mighty Elders — One-Sitting Setup Checklist

Time budget: about 90 minutes end to end. Do these in order.

---

## Phase 1 — Vercel environment variables (10 minutes)

Open [Vercel project settings → Environment Variables](https://vercel.com/dashboard) and add the following for **Production, Preview, and Development**:

| Variable | Where to get it | Notes |
|---|---|---|
| `RESEND_API_KEY` | [resend.com/api-keys](https://resend.com/api-keys) → Create API Key (full access) | Starts with `re_` |
| `RESEND_FROM_EMAIL` | Your verified Resend sender, e.g. `Acie Grimes <acie@pamperedcompanioncare.org>` | Domain must be verified in Resend first |
| `CONVERTKIT_API_KEY` | [app.kit.com/account_settings/advanced_settings](https://app.kit.com/account_settings/advanced_settings) → API Key | The v3 key, not the secret |
| `CONVERTKIT_FORM_ID` | Kit → Grow → Landing Pages & Forms → your form → URL (`/forms/<ID>`) | Numeric |
| `MIGHTY_ELDERS_ADMIN_TOKEN` | Generate locally: `openssl rand -hex 32` | Treat like a password |

After adding all five, click **Deployments → Redeploy** on the latest production build so the new vars load.

**Verify:** open the live site, take the quiz with a throwaway email, and confirm:
- You receive the welcome email from Resend within 30 seconds
- The subscriber appears in Kit with the correct `me-tier-*` tag
- `https://pamperedcompanioncare.org/mighty-elders/admin?token=YOUR_TOKEN` loads the dashboard

---

## Phase 2 — Build the four Kit sequences (45 minutes)

You have two options.

### Option A — CSV import (fastest, if Kit allows it on your plan)
1. In Kit, go to **Email → Sequences → Import**
2. Upload `kit_emails_import.csv` (in this folder)
3. Map columns: Sequence → Sequence name, Position → Order, SendDay → Delay, Subject → Subject, PreviewText → Preview, Body → Email body
4. Verify each of the four sequences has 5 emails on Days 1, 3, 6, 10, 14

### Option B — Manual entry (works on every Kit plan)
1. Open `kit_automation_and_emails.md` in this folder
2. In Kit, create four sequences with these exact names:
   - **Newcomer Track**
   - **Curious Learner Track**
   - **Ready Defender Track**
   - **Living Library Track**
3. For each sequence, add 5 emails. The delay between each email should be:
   - Email 1 → 1 day
   - Email 2 → 2 days (so it lands Day 3)
   - Email 3 → 3 days (Day 6)
   - Email 4 → 4 days (Day 10)
   - Email 5 → 4 days (Day 14)
4. Copy each subject, preview text, and body verbatim from the doc

---

## Phase 3 — Build the visual automation (20 minutes)

Follow **Part 1 — Section 6** of `kit_automation_and_emails.md` step by step. Summary:

1. **Trigger:** subscribes to your Mighty Elders quiz form
2. **Action:** check for tier tag, then branch to the matching sequence
3. **End-of-sequence actions:** Newcomer/Curious Learner sequences end with "Add tag `me-family-allies-invite`" if applicable; Ready Defender/Living Library end with the leadership invite tag
4. **Global engagement rule:** add `me-engaged` when any sequence email is opened or clicked
5. **Low-engagement rule:** add `me-low-engagement` if no opens after 14 days; pause future sends

The doc walks you through each automation node click by click.

---

## Phase 4 — Schedule the first month of social posts (15 minutes)

You have two formats:

- **`social_calendar_month1.md`** — readable narrative version (post-by-post)
- **`social_calendar_month1.csv`** — importable into Buffer, Later, Hootsuite, Meta Business Suite, or Sprinklr

Recommended workflow:
1. Open the CSV in a scheduler that supports bulk import (Buffer's CSV uploader or Later's Bulk Scheduler are the easiest for this format)
2. Map columns: Date + Time → Scheduled time, Platform → Channel, Body → Post text, Hashtags → append to post text, Visual → asset slot
3. Spot-check the first 7 days, queue the remaining 23

If you prefer to schedule manually, work straight from the `.md` file — it groups posts by day, in the order they should go out.

---

## Phase 5 — Final smoke test (5 minutes)

1. Visit `https://pamperedcompanioncare.org/mighty-elders` — confirm the founder video plays
2. Take the quiz with a throwaway address and confirm the welcome email + admin dashboard entry
3. Visit `https://pamperedcompanioncare.org/mighty-elders/for-families` — confirm the Family Allies page loads
4. Test the YouTube subscribe button under the video — confirms it opens the channel

Once all five phases pass, the launch infrastructure is fully live.

---

## Reference URLs

- Live site: https://pamperedcompanioncare.org
- Main page: https://pamperedcompanioncare.org/mighty-elders
- Family Allies: https://pamperedcompanioncare.org/mighty-elders/for-families
- Admin dashboard: https://pamperedcompanioncare.org/mighty-elders/admin?token=YOUR_TOKEN
- Founder video: https://youtu.be/gzNhq5R49MI
- YouTube channel: https://youtube.com/@pamperedcompanioncare
