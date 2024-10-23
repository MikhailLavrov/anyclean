import { useNavigate } from 'react-router-dom';

export const MenuLink = ({item, className, onClickHandler}) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate('', { replace: true });
    onClickHandler && onClickHandler();
  };

  return (
    <>
    {item.key.length !== 0 ? (
      <a {...className} href={`#${item?.key}`} onClick={onClickHandler && onClickHandler}>{item.title}</a>
      ) : (
      <span {...className} onClick={scrollToTop}>{item.title}</span>
    )}
    </>
  )
}
