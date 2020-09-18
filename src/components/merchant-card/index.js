import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import styles from  '../css-and-ui-library/merchant-card.module.css';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
    },
    iconHover: {
      color: '#ff3d47',
    },
  })(Rating);

const MerchantCard = ({props}) => {
    const merchant = props.restaurant
    return (
        <Card className={styles.merchant_card}>
            <Grid>
                <img src={merchant.thumb} className={styles.image}/>
                <Grid className={styles.merchant_card_desc}>
                    <Grid container item xs={12}>
                        <Grid container item xs={6}>
                            {merchant.name}
                        </Grid>
                        <Grid container item alignItems="flex-start" justify="flex-end" xs={6}>
                            <StyledRating
                                icon={<AttachMoneyIcon/>}
                                value={parseInt(merchant.price_range)} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid container item xs={6}>
                            {merchant.cuisines}
                        </Grid>
                        <Grid container item alignItems="flex-start" justify="flex-end" xs={6}>
                            <Rating
                                name="read-only"
                                value={parseInt(merchant.user_rating.aggregate_rating)} 
                                readOnly/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MerchantCard;