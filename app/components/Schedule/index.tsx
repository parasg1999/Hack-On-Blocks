import styles from "./schedule.module.scss";

export default function Schedule() {
  return (
    <>
      <div className={`${styles.schedule} mt-12`}>
        <div className="flex  text-white">
          <div>
            <span>Schedule</span>
            <span>January 20 - February 21</span>
          </div>
          <div>Timezone</div>
        </div>

        <div className="headers grid grid-cols-4">
          <div>Week 1</div>
          <div>Week 1</div>
          <div>Week 1</div>
          <div>Week 1</div>
        </div>
      </div>
    </>
  );
}
