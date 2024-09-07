import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { reservationId } = params;
  const { numGuests, observations } = await getBooking(reservationId);
  console.log(numGuests);
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <form
        className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
        action={updateBooking}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: 23 }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <input type="hidden" value={reservationId} name="bookingId" />
        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>
        <div className="flex justify-end items-center gap-6">
          <SubmitButton>Submit Button</SubmitButton>
        </div>
      </form>
    </div>
  );
}
