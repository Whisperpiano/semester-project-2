import Alert from "../elements/Alert";

export default function Duration() {
  return (
    <div>
      <h2 className=" mb-3 text-sm font-semibold uppercase dark:text-neutral-50 text-neutral-900">
        Duration
      </h2>
      <Alert
        text="Once you create the item you will not be able to change the duration."
        type="information"
      />
      <div className="mt-6 flex items-center justify-between">
        <label
          htmlFor="duration"
          className="text-sm dark:text-neutral-50 text-neutral-900"
        >
          Set the finish line for your auction!
        </label>
        <select
          id="duration"
          className="p-3 rounded-lg border outline-none text-sm max-w-[100px] w-full dark:bg-neutral-950 dark:border-neutral-800 dark:text-neutral-50"
          defaultValue="1"
          aria-label="duration"
        >
          <option value="1">7 days</option>
          <option value="2">2 weeks</option>
          <option value="3">1 month</option>
          <option value="4">3 months</option>
        </select>
      </div>
    </div>
  );
}