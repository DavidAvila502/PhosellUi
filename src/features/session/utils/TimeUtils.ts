export function formatRawTime(timeString: string) {
   const [hours, minutes, seconds] = timeString.split(":").map(Number);

   const date = new Date();
   date.setHours(hours, minutes, seconds, 0);

   const formatted = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
   });

   return formatted;
}
