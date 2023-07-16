use ink::storage::Mapping;
use openbrush::{
    contracts::psp34::Id,
    traits::{AccountId, Balance, ZERO_ADDRESS},
};

pub const STORAGE_KEY: u32 = openbrush::storage_unique_key!(Data);

#[derive(Debug)]
#[openbrush::upgradeable_storage(STORAGE_KEY)]
pub struct Data {
    // Contract owner address
    pub admin_address: AccountId,
    // `$Eggs` token (i.e. psp22) address
    pub eggs_token_address: AccountId,
    // All chicken staked token count
    pub total_staked: u64,
    // Total number of token staked by account
    pub total_staked_token_by_account: Mapping<AccountId, u64>,
    // Total number of token staked
    pub total_staked_token: Mapping<u64, (AccountId, Id)>,
    // unstaking time limit
    pub limit_unstaking_time: u64,
    // Earn `$Eggs` per day by each staked token
    pub amount_of_eggs_token_earn_per_day: Balance,
    pub _reserved: Option<()>,
}

impl Default for Data {
    fn default() -> Self {
        Data {
            admin_address: ZERO_ADDRESS.into(),
            eggs_token_address: ZERO_ADDRESS.into(),
            total_staked: Default::default(),
            total_staked_token_by_account: Mapping::default(),
            total_staked_token: Mapping::default(),
            limit_unstaking_time: Default::default(),
            amount_of_eggs_token_earn_per_day: Default::default(),
            _reserved: Default::default(),
        }
    }
}
