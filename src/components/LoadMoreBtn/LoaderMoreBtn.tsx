interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => {
  return <button onClick={onLoadMore}>Load More</button>;
};

export default LoadMoreBtn;
