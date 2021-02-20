require("dotenv")

const cloudinary = require("cloudinary").v2

module.exports = {
    saveFileToCloudinary: async (path, categoryName) => {

        try {

            cloudinary.config({
                api_key: process.env.CLOUDINARY_KEY,
                cloud_name: process.env.CLOUDINARY_NAME,
                api_secret: process.env.CLOUDINARY_SECRET
            })

            const image = await cloudinary.uploader.upload(
                path,
                {
                    public_id: `categories/${categoryName}`,
                    tags: 'category'
                }
            );

            console.log('file uploaded successfully')
            // remove file from server
            const fs = require('fs')
            fs.unlinkSync(path)
            // return image details
            return (image.url)
        }
        catch (err) {
            throw (err)
        }

    }
}