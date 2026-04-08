import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

const EMAILS_FILE = path.join(process.cwd(), 'data', 'subscribers.json');

function getSubscribers() {
  try {
    const data = readFileSync(EMAILS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveSubscribers(subscribers: string[]) {
  const dir = path.dirname(EMAILS_FILE);
  try {
    writeFileSync(EMAILS_FILE, JSON.stringify(subscribers, null, 2));
  } catch {
    // If file doesn't exist, create the directory and file
    try {
      const fs = require('fs');
      fs.mkdirSync(dir, { recursive: true });
      writeFileSync(EMAILS_FILE, JSON.stringify(subscribers, null, 2));
    } catch (err) {
      console.error('Error saving subscribers:', err);
    }
  }
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

    const subscribers = getSubscribers();

    // Check if email already exists
    if (subscribers.includes(email)) {
      return Response.json(
        { error: 'Email already subscribed', message: 'This email is already on our list!' },
        { status: 400 }
      );
    }

    // Add new email
    subscribers.push(email);
    saveSubscribers(subscribers);

    return Response.json(
      { success: true, message: 'Successfully subscribed!', count: subscribers.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return Response.json(
      { error: 'Subscription failed' },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
