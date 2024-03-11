export const handler = async (event) => {
    const { keyword } = event.queryStringParameters;
    const responseMessage = `Bianca says ${keyword}`; 
    const response = {
        statusCode: 200,
        body: JSON.stringify(responseMessage),
    };
    return response;
};
