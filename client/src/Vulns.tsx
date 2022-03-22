

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { Pill } from './Pill';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';

import TableRow from '@mui/material/TableRow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import React from 'react';


export function Vulns(props: any) {
    const v = props.vulnerabilties;

    const handleClick = (e: any) => {
        { window.ddClient.host.openExternal(e.target.innerText) };
    }

    return (
        <Box sx={{ m: '2rem', clear: "both" }}>

            {v.map((row: { id: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; description: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; pkgName: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; installedVersion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; fixedVersion: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; primaryURL: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
                <Accordion>
                    <AccordionSummary sx={{ overflowX: 'hidden' }} expandIcon={<ExpandMoreIcon />}>
                        <Pill item={row} />

                        <Typography sx={{ width: '16%', minWidth: '120px', flexShrink: 0, m: '0.35rem' }}>
                            {row.id}
                        </Typography>
                        <Typography sx={{ m: '0.35rem', overflowX: 'hidden', maxWidth: "60%" }}>
                            {row.pkgName}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="h5" gutterBottom>
                            {row.title}
                        </Typography>
                        <Typography>
                            {row.description}
                        </Typography>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <Typography>
                                        Package Name:
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {row.pkgName}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography>
                                        Installed Version:
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {row.installedVersion}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography>
                                        Fixed Version:
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        {row.fixedVersion}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Typography>
                                        More Info:
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>
                                        <a href="#" style={{ color: '#116ED0' }} onClick={handleClick}>{row.primaryURL}</a>
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </AccordionDetails>
                </Accordion>
            ))
            }
        </Box>
    )

}