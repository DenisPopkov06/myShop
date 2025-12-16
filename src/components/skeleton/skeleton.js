import ContentLoader from "react-content-loader";
const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="49" y="49" rx="15" ry="15" width="292" height="292" />
    <rect x="52" y="229" rx="5" ry="5" width="104" height="24" />
    <rect x="52" y="295" rx="5" ry="5" width="60" height="18" />
    <rect x="52" y="266" rx="5" ry="5" width="120" height="18" />
  </ContentLoader>
);

export default Skeleton;
