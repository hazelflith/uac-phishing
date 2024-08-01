module.exports = {
  packagerConfig: {
    icon: "./logo.ico",
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      author: "Notepad",
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      }
    }
  ]
};