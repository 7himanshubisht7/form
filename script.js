document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cricketForm");

  if (!form) {
    console.error("❌ Form with id='cricketForm' not found");
    return;
  }

  const getValues = (name) =>
    Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
      .map(el => el.value);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      age: formData.get("age"),
      experience: formData.get("experience"),
      role: getValues("role[]"),

      ball_preference: formData.get("ball_preference"),
      batting_position: formData.get("batting_position"),
      batting_style: formData.get("batting_style"),
      strong_side: formData.get("strong_side"),
      batting_approach: getValues("batting_approach[]"),
      preferred_shots: getValues("preferred_shots[]"),
      face_bowlers: getValues("face_bowlers[]"),
      batting_rating: Number(formData.get("batting_rating")) || null,

      bowling_type: getValues("bowling_type[]"),
      bowling_phase: getValues("bowling_phase[]"),
      bowling_style: formData.get("bowling_style"),
      bowling_variations: getValues("bowling_variations[]"),
      overs: formData.get("overs"),
      bowling_accuracy: Number(formData.get("bowling_accuracy")) || null,

      fielding_position: formData.get("fielding_position"),
      fielding_area: formData.get("fielding_area"),
      arm_strength: Number(formData.get("arm_strength")) || null,
      close_fielding: formData.get("close_fielding") === "true",
      catching_rating: Number(formData.get("catching_rating")) || null,

      favourite_cricketer: formData.get("favourite_cricketer"),
      favourite_female_cricketer: formData.get("favourite_female_cricketer"),
      captain_interest: formData.get("captain_interest"),
      fitness_rating: Number(formData.get("fitness_rating")) || null,
      snack: formData.get("snack")
    };

    console.log("Submitting payload:", payload);

    const { error } = await window.supabaseClient
      .from("cricket_survey")
      .insert([payload]);

    if (error) {
      console.error(error);
      alert("❌ Error submitting form");
    } else {
      alert("✅ Form submitted successfully!");
      form.reset();
    }
  });
});
