document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cricketForm");

  if (!form) {
    console.error("❌ Form with id='cricketForm' not found");
    return;
  }
  console.log("🚀 Initializing Cricket Survey Form...");

  // ========================================
  // CONDITIONAL FIELD VISIBILITY LOGIC
  // ========================================

  // Helper function to show/hide an input field with robust null check
  const toggleFieldVisibility = (field, show) => {
  if (!field) return;

  // 🔥 NEVER allow form to be hidden
  if (field.id === "cricketForm" || field.tagName === "FORM") {
    return;
  }

  field.style.display = show ? "" : "none";

  if (!show && "value" in field) {
    field.value = "";
  }
};

  // ========================================
  // 1. ROLE - Show "Other" text field only when "Other" is checked
  // ========================================
  const setupRoleOther = () => {
    const roleCheckboxes = document.querySelectorAll('input[name="role[]"]');
    const roleOtherInput = document.querySelector('input[name="role_other"]');
    
    if (roleOtherInput && roleCheckboxes.length > 0) {
      toggleFieldVisibility(roleOtherInput, false);

      roleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(roleCheckboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(roleOtherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 2. BATTING APPROACH - Show "Other" text field
  // ========================================
  const setupBattingApproachOther = () => {
    const checkboxes = document.querySelectorAll('input[name="batting_approach[]"]');
    const otherInput = document.querySelector('input[name="batting_approach_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 3. PREFERRED SHOTS - Show "Other" text field
  // ========================================
  const setupPreferredShotsOther = () => {
    const checkboxes = document.querySelectorAll('input[name="preferred_shots[]"]');
    const otherInput = document.querySelector('input[name="preferred_shots_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 4. BOWLING VARIATIONS - Show "Other" text field
  // ========================================
  const setupBowlingVariationsOther = () => {
    const checkboxes = document.querySelectorAll('input[name="bowling_variations[]"]');
    const otherInput = document.querySelector('input[name="bowling_variations_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
// 5. PLAYER CATEGORY - FINAL CORRECT LOGIC
// ========================================
const setupPlayerCategory = () => {
  const playerCategoryRadios = document.querySelectorAll(
    'input[name="player_category"]'
  );

  if (!playerCategoryRadios.length) return;

  // Cache elements
  const reasonLabel = document.querySelector(
    'label[for="not_regular_reason"]'
  ) || document.querySelector(
    'label:has(+ input[name="not_regular_reason[]"])'
  ) || document.querySelector(
    'input[name="not_regular_reason[]"]'
  )?.previousElementSibling;

  const notRegularCheckboxes = document.querySelectorAll(
    'input[name="not_regular_reason[]"]'
  );
  const notRegularOtherInput = document.querySelector(
    'input[name="not_regular_reason_other"]'
  );

  const moveLabel = document.querySelector(
    'input[name="move_to_active"]'
  )?.previousElementSibling;

  const moveToActiveRadios = document.querySelectorAll(
    'input[name="move_to_active"]'
  );

  const supportNeededInput = document.querySelector(
    'input[name="support_needed"]'
  );
  const supportLabel = supportNeededInput?.previousElementSibling;

  const toggle = () => {
    const selectedCategory = document.querySelector(
      'input[name="player_category"]:checked'
    )?.value;

    // Show only for Occasional + Not sure
    const showConditional =
      selectedCategory &&
      selectedCategory !== "Active/Regular Player -- always available";

    /* ---------------- Reason section ---------------- */
    if (reasonLabel) reasonLabel.style.display = showConditional ? "block" : "none";

    notRegularCheckboxes.forEach(cb => {
      const wrapper = cb.closest("label") || cb;
      wrapper.style.display = showConditional ? "block" : "none";
      if (!showConditional) cb.checked = false;
    });

    if (!showConditional && notRegularOtherInput) {
      notRegularOtherInput.value = "";
    }

    /* ---------------- Move to active ---------------- */
    if (moveLabel) moveLabel.style.display = showConditional ? "block" : "none";

    moveToActiveRadios.forEach(radio => {
      const wrapper = radio.closest("label") || radio;
      wrapper.style.display = showConditional ? "block" : "none";
      if (!showConditional) radio.checked = false;
    });

    /* ---------------- Support needed ---------------- */
    if (!showConditional) {
      if (supportNeededInput) supportNeededInput.value = "";
      if (supportLabel) supportLabel.style.display = "none";
      if (supportNeededInput) supportNeededInput.style.display = "none";
    }
  };

  // Init + listeners
  toggle();
  playerCategoryRadios.forEach(radio =>
    radio.addEventListener("change", toggle)
  );
};


  // ========================================
  // 6. NOT REGULAR REASON - Show "Other" text field
  // ========================================
  const setupNotRegularReasonOther = () => {
    const checkboxes = document.querySelectorAll('input[name="not_regular_reason[]"]');
    const otherInput = document.querySelector('input[name="not_regular_reason_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 7. MOVE TO ACTIVE - Show "Support needed" only if "Yes" is selected
  // ========================================
  const setupMoveToActiveSupport = () => {
    const moveToActiveRadios = document.querySelectorAll('input[name="move_to_active"]');
    const supportNeededInput = document.querySelector('input[name="support_needed"]');
    
    if (supportNeededInput && moveToActiveRadios.length > 0) {
      const supportLabel = supportNeededInput.previousElementSibling;

      const toggleSupportNeeded = () => {
        const yesSelected = document.querySelector('input[name="move_to_active"]:checked')?.value === 'Yes';
        if (supportLabel && supportLabel.tagName === 'LABEL') {
          toggleFieldVisibility(supportLabel, yesSelected);
        }
        toggleFieldVisibility(supportNeededInput, yesSelected);
      };

      toggleSupportNeeded(); // Initialize

      moveToActiveRadios.forEach(radio => {
        radio.addEventListener('change', toggleSupportNeeded);
      });
    }
  };

  // ========================================
  // 8. AVAILABILITY DAYS - Show "Weekdays" text field
  // ========================================
  const setupAvailabilityDaysWeekdays = () => {
    const checkboxes = document.querySelectorAll('input[name="availability_days[]"]');
    const weekdaysInput = document.querySelector('input[name="availability_weekdays"]');
    
    if (weekdaysInput && checkboxes.length > 0) {
      toggleFieldVisibility(weekdaysInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const weekdaysChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Weekdays' && cb.checked
          );
          toggleFieldVisibility(weekdaysInput, weekdaysChecked);
        });
      });
    }
  };

  // ========================================
  // 9. PREFERRED LOCATION - Show "Other" text field
  // ========================================
  const setupPreferredLocationOther = () => {
    const radios = document.querySelectorAll('input[name="preferred_location"]');
    const otherInput = document.querySelector('input[name="preferred_location_other"]');
    
    if (otherInput && radios.length > 0) {
      toggleFieldVisibility(otherInput, false);

      radios.forEach(radio => {
        radio.addEventListener('change', () => {
          const otherSelected = document.querySelector('input[name="preferred_location"]:checked')?.value === 'Other';
          toggleFieldVisibility(otherInput, otherSelected);
        });
      });
    }
  };

  // ========================================
  // 10. FOOTBALL INTEREST - Show "Preferred days" only if "Yes" or "Maybe"
  // ========================================
  const setupFootballInterest = () => {
    const radios = document.querySelectorAll('input[name="football_interest"]');
    const daysInput = document.querySelector('input[name="football_preferred_days"]');
    
    if (daysInput && radios.length > 0) {
      const daysLabel = daysInput.previousElementSibling;

      const toggleFootballDays = () => {
        const selectedValue = document.querySelector('input[name="football_interest"]:checked')?.value;
        const showDays = selectedValue === 'Yes' || selectedValue === 'Maybe';
        
        if (daysLabel && daysLabel.tagName === 'LABEL') {
          toggleFieldVisibility(daysLabel, showDays);
        }
        toggleFieldVisibility(daysInput, showDays);
      };

      toggleFootballDays(); // Initialize

      radios.forEach(radio => {
        radio.addEventListener('change', toggleFootballDays);
      });
    }
  };

  // ========================================
  // 11. STRENGTHS - Show "Other" text field
  // ========================================
  const setupStrengthsOther = () => {
    const checkboxes = document.querySelectorAll('input[name="strengths[]"]');
    const otherInput = document.querySelector('input[name="strengths_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 12. FITNESS - Show "Other" text field
  // ========================================
  const setupFitnessOther = () => {
    const checkboxes = document.querySelectorAll('input[name="fitness[]"]');
    const otherInput = document.querySelector('input[name="fitness_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 13. OTHER SPORTS - Show "Other" text field
  // ========================================
  const setupOtherSportsOther = () => {
    const checkboxes = document.querySelectorAll('input[name="other_sports[]"]');
    const otherInput = document.querySelector('input[name="other_sports_other"]');
    
    if (otherInput && checkboxes.length > 0) {
      toggleFieldVisibility(otherInput, false);

      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
          const otherChecked = Array.from(checkboxes).some(cb => 
            cb.value === 'Other' && cb.checked
          );
          toggleFieldVisibility(otherInput, otherChecked);
        });
      });
    }
  };

  // ========================================
  // 14. SNACK - Show "Other" text field only when "Other" is selected
  // ========================================
  const setupSnackOther = () => {
    const snackSelect = document.querySelector('select[name="snack"]');
    const otherInput = document.querySelector('input[name="snack_other"]');
    
    if (otherInput && snackSelect) {
      toggleFieldVisibility(otherInput, false);

      snackSelect.addEventListener('change', () => {
        const otherSelected = snackSelect.value === 'Other';
        toggleFieldVisibility(otherInput, otherSelected);
      });
    }
  };

  // ========================================
// 15. PRACTICE COMMITMENT - Show reason only if "No"
// ========================================
const setupPracticeCommitment = () => {
  const radios = document.querySelectorAll('input[name="practice_commitment"]');
  const reasonInput = document.querySelector('input[name="practice_commitment_reason"]');
  const reasonLabel = reasonInput?.closest("label");

  if (!radios.length || !reasonInput) return;

  const toggleReason = () => {
    const selected = document.querySelector('input[name="practice_commitment"]:checked')?.value;
    const show = selected === "No";

    if (reasonLabel) toggleFieldVisibility(reasonLabel, show);
    toggleFieldVisibility(reasonInput, show);
  };

  // Initial state
  toggleReason();

  // Listen to changes
  radios.forEach(radio => {
    radio.addEventListener("change", toggleReason);
  });
};


  // ========================================
  // INITIALIZE ALL CONDITIONAL LOGIC
  // ========================================
  try {
    setupRoleOther();
    setupBattingApproachOther();
    setupPreferredShotsOther();
    setupBowlingVariationsOther();
    setupPlayerCategory();
    setupNotRegularReasonOther();
    setupMoveToActiveSupport();
    setupAvailabilityDaysWeekdays();
    setupPreferredLocationOther();
    setupFootballInterest();
    setupStrengthsOther();
    setupFitnessOther();
    setupOtherSportsOther();
    setupSnackOther();
    setupPracticeCommitment();
    
    console.log("✅ All conditional logic initialized successfully!");
  } catch (error) {
    console.error("❌ Error during initialization:", error);
  }

  // ========================================
  // FORM SUBMISSION HANDLER
  // ========================================

  const getCheckedValues = (name) =>
    Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
      .map(el => el.value);

  form.addEventListener("submit", async (e) => {
  e.preventDefault();

      const formData = new FormData(form);

  // REQUIRED VALIDATIONS
  if (!getCheckedValues("role[]").length) {
    alert("Please select at least one role.");
    return;
  }
  if (!getCheckedValues("bowling_type[]").length) {
    alert("Please select bowling type.");
    return;
  }
  if (!getCheckedValues("availability_days[]").length) {
    alert("Please select availability days.");
    return;
  }
  if (!getCheckedValues("preferred_time[]").length) {
    alert("Please select preferred time slot.");
    return;
  }
  if (!formData.get("name")) {
    alert("Name is required.");
    return;
  }

  if (!formData.get("batting_position")) {
    alert("Batting position is required.");
    return;
  }

  if (!formData.get("batting_style")) {
    alert("Batting style is required.");
    return;
  }


// JSONB / multi-select fields
const role = getCheckedValues("role[]");
const battingApproach = getCheckedValues("batting_approach[]");
const preferredShots = getCheckedValues("preferred_shots[]");
const faceBowlers = getCheckedValues("face_bowlers[]"); // ✅ MISSING FIX
const bowlingType = getCheckedValues("bowling_type[]");
const bowlingPhase = getCheckedValues("bowling_phase[]");
const bowlingVariations = getCheckedValues("bowling_variations[]");

const notRegularReason = getCheckedValues("not_regular_reason[]");
const strengths = getCheckedValues("strengths[]");
const fitness = getCheckedValues("fitness[]");
const otherSports = getCheckedValues("other_sports[]");

const availabilityDays = getCheckedValues("availability_days[]");
const preferredTime = getCheckedValues("preferred_time[]");

const tournamentRole = getCheckedValues("tournament_role[]");
const tournamentType = getCheckedValues("tournament_type[]");


const payload = {
  // BASIC INFO
  "Your name?": formData.get("name"),
  "Your age?": formData.get("age"),
  "How many years of cricket experience do you have?": formData.get("experience"),

  // ROLE
  "Are you a batsman, bowler, all-rounder, or wicket-keeper?": role,
  "Are you a batsman, bowler, all-rounder, or wicket-keeper? (Othe": 
    role.includes("Other") ? formData.get("role_other") : "",

  // BATTING
  "Which ball do you prefer playing with?": formData.get("ball_preference"),
  "What batting position do you prefer?": formData.get("batting_position"),
  "What is your batting style?": formData.get("batting_style"),
  "What's your strong side?": formData.get("strong_side"),

  "What's your batting approach?": battingApproach,
  "What's your batting approach? (Other - specify)": 
    battingApproach.includes("Other") ? formData.get("batting_approach_other") : "",

  "Preferred shot types?": preferredShots,
  "Preferred shot types? (Other - specify)": 
    preferredShots.includes("Other") ? formData.get("preferred_shots_other") : "",

  "Do you prefer facing fast bowlers or spinners?": faceBowlers,

  "Rate your batting skills on a scale of 1-5 (1=beginner, 5=exper":
    Number(formData.get("batting_rating")) || null,

  // BOWLING
  "What type of bowling do you prefer?": bowlingType,
  "In which phase do you prefer bowling?": bowlingPhase,
  "What's your bowling type?": formData.get("bowling_style"),

  "What variations do you have?": bowlingVariations,
  "What variations do you have? (Other - specify)": 
    bowlingVariations.includes("Other") ? formData.get("bowling_variations_other") : "",

  "How many overs can you bowl comfortably in a match?": formData.get("overs"),

  "Rate your bowling accuracy on a scale of 1-5":
    Number(formData.get("bowling_accuracy")) || null,

  // FIELDING
  "Which fielding position do you prefer?": formData.get("fielding_position"),
  "Where do you prefer fielding?": formData.get("fielding_area"),

  "Rate your throwing arm strength (for outfield throws)? (Scale 1":
    Number(formData.get("arm_strength")) || null,

  "Are you comfortable with close-in fielding (e.g., silly point)?":
    formData.get("close_fielding") === "true",

  "Rate your catching/throwing skills on a scale of 1-5":
    Number(formData.get("catching_rating")) || null,

  // ATTENDANCE
  "How frequently do you attend matches?": formData.get("match_attendance"),
  "How many matches per month are you available for?": formData.get("matches_per_month"),

  "Are you willing to commit to regular practice sessions (e.g., w":
    formData.get("practice_commitment"),

  "Are you willing to commit to regular practice sessions? (If No,":
    formData.get("practice_commitment") === "No"
      ? formData.get("practice_commitment_reason")
      : "",

  "What is your preferred notice period for match scheduling?":
    formData.get("notice_period"),

  // CATEGORY
  "Which category do you see yourself in?": formData.get("player_category"),

  "If you're not regular, what's the main reason?": notRegularReason,
  "If you're not regular, what's the main reason? (Other - specify":
    notRegularReason.includes("Other")
      ? formData.get("not_regular_reason_other")
      : "",

  "Would you like to move to the active category?":
    formData.get("move_to_active"),

  "If yes to moving to active category, what support do you need f":
    formData.get("move_to_active") === "Yes"
      ? formData.get("support_needed")
      : "",

  // AVAILABILITY
  "Availability days?": availabilityDays,
  "Availability days? (Weekdays - specify)":
    availabilityDays.includes("Weekdays")
      ? formData.get("availability_weekdays")
      : "",

  "Preferred location in Delhi NCR?": formData.get("preferred_location"),
  "Preferred location in Delhi NCR? (Other - specify)":
    formData.get("preferred_location") === "Other"
      ? formData.get("preferred_location_other")
      : "",

  "Preferred slot/time?": preferredTime,

  // TOURNAMENT
  "In corporate tournaments like CricHeroes, what role do you want":
    tournamentRole,

  "How do you rate your reliability for team events (1-5 scale: 1=":
    Number(formData.get("reliability_rating")) || null,

  "Any suggestions for making the team more inclusive for occasion":
    formData.get("inclusive_suggestions"),

  "Preferred tournament type on CricHeroes?": tournamentType,

  // STRENGTHS & FITNESS
  "What are your strengths in the team?": strengths,
  "What are your strengths in the team? (Other - specify)":
    strengths.includes("Other") ? formData.get("strengths_other") : "",

  "Any weaknesses you'd like to improve?": formData.get("weaknesses"),
  "Suggestions for team improvement?": formData.get("team_improvement"),

  "What do you do for fitness/weight management?": fitness,
  "What do you do for fitness/weight management? (Other - specify)":
    fitness.includes("Other") ? formData.get("fitness_other") : "",

  // OTHER SPORTS
  "What other sports do you follow or like besides cricket?": otherSports,
  "What other sports do you follow or like besides cricket? (Other":
    otherSports.includes("Other") ? formData.get("other_sports_other") : "",

  // FOOTBALL
  "If the team organizes weekend football games sometimes, would y":
    formData.get("football_interest"),

  "If interested in football, preferred days?":
    ["Yes", "Maybe"].includes(formData.get("football_interest"))
      ? formData.get("football_preferred_days")
      : "",

    // GROUP INFO
    "How long have you been part of this group?":
      formData.get("group_duration"),

    "Do you follow the team's CricHeroes profile/stats?":
      formData.get("cricheroes_follow"),
      
      // FAVORITES
  "Who is your favorite cricketer and why?":
    formData.get("favourite_cricketer"),

  "Who's your favourite female cricketer?":
    formData.get("favourite_female_cricketer"),

  "Would you like to captain the team someday?":
    formData.get("captain_interest"),

  "Rate your fitness level for cricket (1-5)":
    Number(formData.get("fitness_rating")) || null,

  "Favorite team snack during breaks?":
    formData.get("snack"),

  "Favorite team snack during breaks? (Other - specify)":
    formData.get("snack") === "Other" ? formData.get("snack_other") : ""
};


  const { error } = await supabaseClient
  .from("cricket_survey")
  .insert([payload]);

  if (error) {
  if (error.message && error.message.toLowerCase().includes("duplicate")) {
    alert("❌ This name is already in the survey list. Please do not fill again.");
  } else {
    alert("❌ Something went wrong. Please try again later.");
    console.error(error);
  }
} else {
  alert("✅ Survey submitted successfully!");

  form.reset();

  // Reset conditional UI
  document.querySelectorAll("input, select").forEach(el => {
    el.dispatchEvent(new Event("change"));
  });

  // 🚀 Redirect IMMEDIATELY after clicking OK
  window.location.href = "https://forms.gle/aenDwWeQjMzhu8Dh9";
}


});


  console.log("✅ Cricket Survey Form fully initialized!");
  // ================================
// FINAL GUARANTEE: KEEP FORM VISIBLE
// ================================
// setTimeout(() => {
//   form.style.display = "block";
// }, 0);
});