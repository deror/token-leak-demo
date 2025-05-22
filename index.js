// Simple demo application

function main() {
  console.log("Token Leak Demo Application");
  console.log("This is a simple application to demonstrate GitHub Actions token leakage");
  
  // Some example functionality
  const data = {
    name: "Token Leak Demo",
    version: "1.0.0",
    description: "Demonstrates GitHub Actions token leakage"
  };
  
  console.log("Application data:", data);
  
  return {
    status: "running",
    timestamp: new Date().toISOString()
  };
}

// Run the application
const result = main();
console.log("Application status:", result);

module.exports = { main };
