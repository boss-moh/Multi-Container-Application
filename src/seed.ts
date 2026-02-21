import { connectDB } from "@/config";
import { TodoUtils } from "@/models";

const sampleTodos = [
  {
    title: "Buy groceries",
    description: "Milk, bread, eggs, and fruits",
    priority: "medium",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3), // 3 days
  },
  {
    title: "Finish project report",
    description: "Complete the final section and review",
    priority: "high",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
  },
  {
    title: "Weekly workout",
    description: "3 sessions this week",
    priority: "low",
    completed: false,
  },
];

async function seed() {
  try {
    await connectDB();
    console.log("Connected to DB — seeding...");

    const created = await TodoUtils.insertMany(sampleTodos);
    console.log(`✅ Seeded ${created.length} todos`);
  } catch (err) {
    console.error("Seeding failed:", err);
  }
}

seed();
