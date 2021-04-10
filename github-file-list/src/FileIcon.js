import PropTypes from "prop-types";

const FileIcon = ({ file }) => {
    const icon = file?.type === "folder" ? "fa-folder" : "fa-file-text-o";
    return (<i className={`fa ${icon}`}></i>);
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileIcon;