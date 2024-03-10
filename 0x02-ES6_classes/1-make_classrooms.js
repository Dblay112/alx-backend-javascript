import ClassRoom from "./0-classroom"; // Removed ".js" extension

export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34), // Added comma
  ];
}
