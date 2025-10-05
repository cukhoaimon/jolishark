import Link from "next/link";
import {styled, Typography, Stack, Box} from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{
                bgcolor: "transparent",
                px: 1,
                py: 0.5,
                borderRadius: 2,
            }}
        >
            <LinkStyled href="/">
                <Box
                    sx={{
                        position: "relative",
                        width: 64,
                        height: 64,
                        borderRadius: "14px",
                        overflow: "hidden",
                        boxShadow: (theme) =>
                            `0 0 12px ${theme.palette.primary.main}33, inset 0 0 10px ${theme.palette.primary.dark}40`,
                        background:
                            "linear-gradient(135deg, #080726 0%, #181832 100%)",
                    }}
                >
                    <Image
                        src="/images/logos/logo.png"
                        alt="logo"
                        fill
                        style={{ objectFit: "contain", padding: "8px" }}
                        priority
                    />
                </Box>
            </LinkStyled>

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    textShadow: "0px 0px 8px rgba(68,89,116,0.5)",
                }}
            >
                Team&nbsp;Jolibee
            </Typography>
        </Stack>
    );
};


export default Logo;
  