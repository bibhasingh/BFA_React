import { useContent } from "./Content";
import "./notice.css";



function Notice() {
    const { updateContent } = useContent();

    function handleNoticeClick() {
        console.log('abc');
        updateContent("Registration");
    }

    return (
        <div className="flashing-banner">
            <button
                type="button"
                className="notice-link"
                onClick={handleNoticeClick}
            >
                🚀 Register for session 2025-2026!
            </button>
        </div>
    );
}

export default Notice;