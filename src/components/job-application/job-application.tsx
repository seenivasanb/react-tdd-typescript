export default function JobApplication() {
  return (
    <>
      <h1>Job Application Form</h1>
      <h3>Section 1</h3>
      <form>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </fieldset>
        <fieldset>
          <label htmlFor="location">Location</label>
          <select name="location" id="location">
            <option value="0">Select Location</option>
            <option value="1">Chennai</option>
            <option value="2">Banglore</option>
            <option value="3">Mumbai</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" /> I agree to the
            terms and conditions
          </label>
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
}
