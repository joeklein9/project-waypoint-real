import React, { useState, useEffect } from 'react';
import { google } from 'googleapis';

const SPREADSHEET_ID = '1fHB39IfwZi_j8aonLOVqc2Cyc8z_T3kQXBXZCDWrr-Q';
const SHEET_NAME = 'Sheet1';
const CELL_RANGE = 'A1:B2';

const auth = new google.auth.GoogleAuth({
    keyFile: './project-jason.json'
});

const sheets = google.sheets({ version: 'v4', auth });

export default function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range: `${SHEET_NAME}!${CELL_RANGE}`,
        });

        setData(response.data.values);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

