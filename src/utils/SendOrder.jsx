const CHAT_ID='-1002006231945'
const BOT_TOKEN='7103517816:AAG86TXNqQRxBOFDdwQkKe7Bs__cKgo9H1w'

export const sendOrder = async ({message}) => {
  const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
  const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

  if (message) {
    try {
      await fetch(POST_REQUEST_URL);
    } catch (error) {
      console.error('Произошла ошибка при отправке сообщения:', error);
    }
  }
};
