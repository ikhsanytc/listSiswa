import { formatDistanceToNow } from "date-fns";
function generateRandomToken(length: number) {
  const characters = "0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return Number(token);
}

function timeAgo(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export { generateRandomToken, timeAgo };
