const CHAT_ID=''
const BOT_TOKEN=''

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
