import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Segmentation',
    description:
      'Target your audience more effectively with powerful segmentation features. Create dynamic segments based on user behavior, preferences, and demographics. Send personalized content that resonates with each segment, boosting your engagement and conversion rates.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Automation',
    description:
      'Save time and increase efficiency with our robust automation tools. Set up automated workflows for welcome emails, follow-ups, and more. Automate repetitive tasks and focus on what matters most – growing your busin',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'A/B Testing',
    description:
      'Optimize your email campaigns with A/B testing. Experiment with different subject lines, content, and send times to determine what resonates best with your audience. Make data-driven decisions to enhance your email marketing efforts.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Deliverability',
    description:
      'Ensure your emails reach their intended recipients with our high deliverability rates. Our platform uses industry-best practices and partnerships with major ISPs to keep your emails out of the spam folder and in front of your audience.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Compliance',
    description:
      'Stay compliant with all major email regulations, including GDPR and CAN-SPAM. Our platform provides the tools and guidance you need to manage subscriptions, handle opt-outs, and maintain a clean mailing list.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Customer Support',
    description:
      'Experience top-notch customer support from our dedicated team of email marketing experts. Whether you need help setting up your account, creating campaigns, or troubleshooting issues, we’re here to assist you every step of the way.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          {/* <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography> */}
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}