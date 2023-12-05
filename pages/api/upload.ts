// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Assuming the request contains the path to the video file and other necessary data
    const { videoFilePath, title, description } = req.body;

    // Replace 'path/to/your/script.py' with the actual path to your Python script
    // and ensure it accepts command line arguments as needed
    const scriptCommand = `python /Users/treygreen/youtube_upload/main.py "${videoFilePath}" "${title}" "${description}"`;

    exec(scriptCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);

      res.status(200).json({ message: 'Video uploaded successfully' });
    });
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

