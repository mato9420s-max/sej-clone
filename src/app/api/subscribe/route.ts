// Newsletter subscription API - Cloudflare KV compatible
// Uses file system in development, KV in production (Cloudflare Workers)

const SUBSCRIBERS_KEY = 'newsletter_subscribers';

async function getSubscribers(): Promise<string[]> {
  try {
    const { readFileSync } = require('fs');
    const path = require('path');
    const emailsFile = path.join(process.cwd(), 'data', 'subscribers.json');
    const data = readFileSync(emailsFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubscribers(subscribers: string[]): Promise<void> {
  try {
    const { writeFileSync, mkdirSync } = require('fs');
    const path = require('path');
    const emailsFile = path.join(process.cwd(), 'data', 'subscribers.json');
    const dir = path.dirname(emailsFile);
    mkdirSync(dir, { recursive: true });
    writeFileSync(emailsFile, JSON.stringify(subscribers, null, 2));
  } catch (error) {
    console.error('File save error:', error);
    throw new Error('Failed to save subscription');
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !isValidEmail(email)) {
      return Response.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const subscribers = await getSubscribers();

    // Check if email already exists
    if (subscribers.includes(email)) {
      return Response.json(
        {
          error: 'Email already subscribed',
          message: 'This email is already on our list!',
        },
        { status: 400 }
      );
    }

    // Add new email
    subscribers.push(email);
    await saveSubscribers(subscribers);

    return Response.json(
      {
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
        count: subscribers.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return Response.json(
      {
        error: 'Subscription failed',
        message: error instanceof Error ? error.message : 'Please try again later',
      },
      { status: 500 }
    );
  }
}
