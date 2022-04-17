import TrackStructureCSS from "trackStructure.module.css";

export default function TrackStructure() {
  return (
    <div className={TrackStructureCSS.wrapper_track_list}>
      <div className={TrackStructureCSS.track_number}></div>
      <div className={TrackStructureCSS.track_image}></div>
      <div className={TrackStructureCSS.track_title}></div>
      <div className={TrackStructureCSS.track_artist}></div>
      <div className={TrackStructureCSS.track_duration}></div>
      <div className={TrackStructureCSS.track_action}></div>
    </div>
  );
}
