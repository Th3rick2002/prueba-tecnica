import {app, port} from "./server"

app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
})