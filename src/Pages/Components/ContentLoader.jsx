import BounceLoader from "react-spinners/BounceLoader";

const ContentLoader = () => {
    return (
        <div className="page-loader">
            <BounceLoader color="#00B6F0" loading={true}  size={100} />
        </div>
    )
}

export default ContentLoader
