export default function tempo( request, response ){

    try {
        const localDate = new Date();

        response.json({
            date: localDate.toGMTString()
        })
    } catch (error) {
        response.status(500).json({
            error: error.message
        })
    }
}