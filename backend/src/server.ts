import app from "./app";


const main = () => {
    try {
        app.listen(process.env.PORT || 8000, () => {
          console.log(`Server is running on http://localhost:${process.env.PORT || 8000}`);
        });
    } catch (error) {
        console.error("Error during server startup:", error);
        process.exit(1); // Exit the process with an error code
    }
}

main();