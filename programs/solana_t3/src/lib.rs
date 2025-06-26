#![allow(deprecated)]
use anchor_lang::prelude::*;

declare_id!("52ZVHRuyZTAqSAoWF8V4Fn1BiFwWRoqj9YVxE5D4u5Nj");

#[program]
pub mod solana_t3 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
