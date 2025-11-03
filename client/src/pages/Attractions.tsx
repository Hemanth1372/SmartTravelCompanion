import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Sample data (same as in Home.tsx)
const attractions = [
  {
    id: 1,
    name: "Brahma Sarovar",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=60",
    description: "A sacred water tank in Kurukshetra, Haryana, India.",
  },
  {
    id: 2,
    name: "Hawa Mahal",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=500&q=60",
    description: "Palace of Winds in Jaipur, known for its unique architecture.",
  },
  {
    id: 3,
    name: "Har Ki Pauri",
    image:
      "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    description: "Famous ghat on the banks of the Ganges in Haridwar.",
  },
  {
    id: 4,
    name: "Taj Mahal",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=500&q=60",
    description: "Iconic marble mausoleum in Agra, a UNESCO World Heritage site.",
  },
];

const Attractions = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, bgcolor: "background.default", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            mb: 6,
            color: "text.primary",
          }}
        >
          ATTRACTIONS
        </Typography>
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ mb: 6, color: "text.secondary" }}
        >
          Explore India's most beautiful and historic attractions
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}
        >
          {attractions.map((attraction) => (
            <Card
              key={attraction.id}
              sx={{
                width: { xs: "100%", sm: "45%", md: "30%", lg: "22%" },
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 16px 32px rgba(0,0,0,0.16)",
                  "& .card-image": {
                    transform: "scale(1.05)",
                  },
                },
              }}
              onClick={() => navigate(`/create-trip?destination=${attraction.name}`)}
            >
              <Box sx={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={attraction.image}
                  alt={attraction.name}
                  className="card-image"
                  sx={{
                    transition: "transform 0.5s ease",
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "text.primary",
                  }}
                >
                  {attraction.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {attraction.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/create-trip?destination=${attraction.name}`);
                  }}
                >
                  Plan a Trip
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/")}
            sx={{ mr: 2 }}
          >
            Back to Home
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/create-trip")}
          >
            Create Custom Trip
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Attractions;