import style from "./skeleton.module.css";
const Skeleton = () => (
  <>
    <div className={style.skeleton_item}></div>
    <div className={style.skeleton_title}></div>
    <div className={style.skeleton_price}></div>
    <div className={style.skeleton_raiting}></div>
  </>
);

export default Skeleton;
