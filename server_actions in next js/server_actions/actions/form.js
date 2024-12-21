import fs from"fs/promises"

export const onsubmit = async(e) => {
    "use server"
    console.log(e.get("name"),e.get("pass"),e.get("email"));
    fs.appendFile("harry.txt", `name: ${e.get("name")} \n pass: ${e.get("pass")}\nemail: ${e.get("email")}\n\n`)
    
  }