import {google} from 'googleapis'



//To Connect Node.js to Google Sheet

    const auth = new google.auth.GoogleAuth({
        keyFile : "creads.json",
        scopes : "https://www.googleapis.com/auth/spreadsheets"
    })
    const client = await auth.getClient()
    const googleSheets = google.sheets({version : "v4" , auth : client})
    const spreadsheetId = "1TrNpumnuG8nbFhYIYVeEIqZeqCLKxVxyVwnu3wH0wS4"

    console.log("Spreadsheet is live ...")



export {auth,spreadsheetId,googleSheets};