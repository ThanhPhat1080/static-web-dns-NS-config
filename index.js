import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});