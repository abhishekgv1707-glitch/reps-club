const PHONE_NUMBER = "917483136683"; // Replace with the gym's WhatsApp number

export function openMembershipChat() {
  const message = `🏋️ Hello Reps Club Team!

I'm interested in joining Reps Club and would like to know more about your membership plans.

👤 Name:
🎂 Age:
📍 Location:

🎯 Fitness Goal:
• Weight Loss
• Muscle Gain
• General Fitness
• Strength Training
• Other

❓ My Query:

Looking forward to hearing from you.
Thank you!`;

  window.open(
    `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

export function openCoachChat() {
  const message = `👋 Hello Coach!

I would like guidance before joining Reps Club.

👤 Name:
🎂 Age:

🏋️ Current Fitness Level:

🎯 My Goal:

❓ My Question:

Thank you!`;

  window.open(
    `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

export function openGeneralChat() {
  const message = `👋 Hello Reps Club!

I would like to know more about your gym.

👤 Name:

📞 Contact Number:

❓ My Query:

Thank you!`;

  window.open(
    `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}