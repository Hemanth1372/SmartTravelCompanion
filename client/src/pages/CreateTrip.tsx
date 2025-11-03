import React, { useState, useEffect } from "react"; // 👈 Import useEffect
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Alert,
  Container,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// 👈 Import useLocation for reading URL parameters
import { useNavigate, useLocation } from "react-router-dom";
import { useTrip } from "../contexts/TripContext";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

// --- Utility Functions for URL and Destination Parsing ---

// Helper hook to easily get URL query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

// Helper function to provide a simple guess for the country based on the city/destination name
const guessCountryFromCity = (city: string): string => {
  const lowerCity = city.toLowerCase();

  // Basic mapping for the cities in your diary data
  if (
    lowerCity.includes("darjeeling") ||
    lowerCity.includes("guwahati") ||
    lowerCity.includes("jaipur") ||
    lowerCity.includes("vizag") ||
    lowerCity.includes("chandigarh") ||
    lowerCity.includes("gaya") ||
    lowerCity.includes("mechuka") ||
    lowerCity.includes("andaman")
  ) {
    return "India";
  }

  // You can extend this with a larger static map or a proper API call later
  return "";
};

// --------------------------------------------------------

// Styled components for consistent UI
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  textAlign: "center",
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: theme.shadows[3],
}));

export default function CreateTrip() {
  const navigate = useNavigate();
  const query = useQuery(); // 👈 Use the custom hook to access URL params
  const { createTrip } = useTrip();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    destination: {
      country: "",
      city: "",
    },
    startDate: dayjs(),
    endDate: dayjs().add(7, "day"),
    budget: {
      total: 0,
      currency: "USD",
      spent: 0,
    },
    travelers: [] as Array<{ name: string; email: string; role: string }>,
    status: "planning" as
      | "planning"
      | "upcoming"
      | "ongoing"
      | "completed"
      | "cancelled",
    tags: [] as string[],
    notes: "",
  });

  // --- useEffect Hook to Read URL and Pre-fill Form ---
  useEffect(() => {
    // 1. Get the destination from the URL query string
    const destinationQuery = query.get("destination");

    if (destinationQuery) {
      // 2. Set the initial form values
      const countryGuess = guessCountryFromCity(destinationQuery);

      setFormData((prev) => ({
        ...prev,
        name: `Trip to ${destinationQuery}`, // e.g., "Trip to Vizag"
        description: `Plan based on the travel diary for ${destinationQuery}.`,
        destination: {
          city: destinationQuery,
          country: countryGuess,
        },
        // You could also set a default date range here if needed
      }));
    }
  }, [query]); // Re-run when the query parameters change

  // -----------------------------------------------------

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const tripData = {
        ...formData,
        startDate: formData.startDate.toISOString(),
        endDate: formData.endDate.toISOString(),
      };

      // Basic validation check (can be improved)
      if (
        !tripData.name ||
        !tripData.destination.city ||
        !tripData.destination.country
      ) {
        throw new Error(
          "Please fill in the required fields (Trip Name, City, Country)."
        );
      }

      const newTrip = await createTrip(tripData);
      navigate(`/trips/${newTrip._id}`);
    } catch (err: any) {
      setError(err.message || "Failed to create trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <SectionTitle variant="h4">CREATE NEW TRIP</SectionTitle>
        <SectionSubtitle variant="subtitle1">
          — plan your next adventure —
        </SectionSubtitle>

        <StyledCard>
          <CardContent sx={{ p: 4 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Trip Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                fullWidth
                required
              />

              <TextField
                label="Description"
                multiline
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                fullWidth
              />

              <Box display="flex" gap={2}>
                <TextField
                  label="City *"
                  value={formData.destination.city}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      destination: {
                        ...prev.destination,
                        city: e.target.value,
                      },
                    }))
                  }
                  sx={{ flex: 1 }}
                  required
                />
                <TextField
                  label="Country *"
                  value={formData.destination.country}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      destination: {
                        ...prev.destination,
                        country: e.target.value,
                      },
                    }))
                  }
                  sx={{ flex: 1 }}
                  required
                />
              </Box>

              <Box display="flex" gap={2}>
                <DatePicker
                  label="Start Date"
                  value={formData.startDate}
                  onChange={(newValue: Dayjs | null) =>
                    newValue &&
                    setFormData((prev) => ({ ...prev, startDate: newValue }))
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
                <DatePicker
                  label="End Date"
                  value={formData.endDate}
                  onChange={(newValue: Dayjs | null) =>
                    newValue &&
                    setFormData((prev) => ({ ...prev, endDate: newValue }))
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Box>

              <TextField
                label="Budget"
                type="number"
                value={formData.budget.total}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    budget: {
                      ...prev.budget,
                      total: parseFloat(e.target.value) || 0,
                    },
                  }))
                }
                fullWidth
              />

              <TextField
                label="Notes"
                multiline
                rows={3}
                value={formData.notes}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, notes: e.target.value }))
                }
                fullWidth
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={
                  loading ||
                  !formData.name ||
                  !formData.destination.city ||
                  !formData.destination.country
                }
                fullWidth
              >
                {loading ? "Creating..." : "Create Trip"}
              </Button>
            </Box>
          </CardContent>
        </StyledCard>
      </Container>
    </LocalizationProvider>
  );
}
